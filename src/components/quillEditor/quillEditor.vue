<template>
  <div>
    <quill-editor
      ref="myQuillEditor"
      v-model="currentContent"
      :options="editorOption"
      @focus="onEditorFocus($event)"
      @blur="onEditorBlur($event)"
      @change="onEditorChange($event)"
      class="quill"
    >
      <div id="toolbar" slot="toolbar">
        <span
          v-if="isShowImg"
          class="iconfont icon-piliangdaoru editorImg"
          title="图片"
          @click="insertImgClick($event)"
        />
        <!-- <span class="iconfont icon-chuangjian" title="视频" @click="insertVideoClick($event)" />  插入视频 -->
      </div>
    </quill-editor>
    <input
      id="insert_image"
      style="display: none"
      type="file"
      @change="fileInsert($event)"
    />
    <!-- 选择图片input -->
    <input
      id="insert_video"
      style="display: none"
      type="file"
      @change="fileInsert($event)"
    />
    <!-- 选择视频input -->
  </div>
</template>

<script>
import $ from "jquery";
import { uploadFile } from "@/api/message";
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
  ["blockquote", "code-block"], // 引用  代码块-----['blockquote', 'code-block']
  [{ header: 1 }, { header: 2 }], // 1、2 级标题-----[{ header: 1 }, { header: 2 }]
  [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
  [{ script: "sub" }, { script: "super" }], // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
  [{ indent: "-1" }, { indent: "+1" }], // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
  [{ direction: "rtl" }], // 文本方向-----[{'direction': 'rtl'}]
  [{ size: ["small", false, "large", "huge"] }], // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题-----[{ header: [1, 2, 3, 4, 5, 6, false] }]
  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
  [{ font: [] }], // 字体种类-----[{ font: [] }]
  [{ align: [] }], // 对齐方式-----[{ align: [] }]
  ["clean"], // 清除文本格式-----['clean']
  ["link", "image"], // 链接、图片、视频-----['link', 'image', 'video']
];
export default {
  name: "MyQuillEditor",
  props: {
    value: {
      type: [String, Number],
      default: "",
      required: true,
    },
    isShowImg: {
      type: Boolean,
      default: false,
    },
    isEditor: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    currentContent: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  watch: {
    isEditor() {
      this.$nextTick(() => {
        this.editor.enable(!this.isEditor);
      });
    },
  },
  data() {
    return {
      editor: {
        quill: true,
      }, // 富文本编辑器对象
      editorOption: {
        placeholder: "请输入...",
        theme: "snow",
        modules: {
          toolbar: {
            container: toolbarOptions, // 工具栏
            handlers: {
              image: function (value) {
                if (value) {
                  document.getElementById("insert_image").click();
                } else {
                  this.quill.format("image", false);
                }
              },
            },
          },
        },
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.editor = this.$refs.myQuillEditor.quill;
      this.editor.enable(!this.isEditor);
    });
  },
  beforeDestroy() {
    this.editor = null;
    this.currentContent = "";
    this.$emit("input", "");
    delete this.editor;
  },
  methods: {
    onEditorReady(editor) {},
    // 富文本编辑器 失去焦点事件
    onEditorBlur(editor) {
      // this.$emit("update:content", this.currentContent);
    },
    // 富文本编辑器 获得焦点事件
    onEditorFocus(editor) {},
    // 富文本编辑器 内容改变事件
    onEditorChange(editor) {
      // this.$emit("update:content", this.currentContent);
    },
    // 富文本编辑器 点击插入图片
    insertImgClick(e) {
      document.getElementById("insert_image").click();
    },
    // 富文本编辑器 点击插入视频
    insertVideoClick(e) {
      document.getElementById("insert_video").click();
    },
    changeContent(value) {
      this.currentContent = value;
    },
    // 富文本编辑器 点击插入图片或者视频上传并预览
    fileInsert(e) {
      let oFile = e.target.files[0];
      if (typeof oFile === "undefined") {
        return;
      }
      const isLt2M = oFile.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$alert("上传 图片大小不能超过 2MB!", "提示", {
          confirmButtonText: "确定",
        });
        return;
      }
      const name = e.target.files[0].name; // 文件扩展名
      const type = name.split(".").pop();
      let sfileType = "image"; // 上传文件类型
      if (!["jpg", "jpeg", "png", "gif"].includes(type)) {
        this.$alert("不支持该类型图片", "提示", {
          confirmButtonText: "确定",
        });
        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(oFile);
      reader.onloadend = () => {
        uploadFile(oFile)
          .then((res) => {
            this.editor.insertEmbed(
              this.editor.selection.savedRange.index,
              sfileType,
              res.picUrl
            ); // 这个方法用来手动插入dom到编辑器里
            this.editor.setSelection(
              this.editor.selection.savedRange.index + 1
            ); // 这个方法可以获取光标位置
          })
          .catch((response) => {
            this.$message({ message: "图片上传失败", type: "warning" });
          });
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.editorImg::before {
  font-size: 20px;
  cursor: pointer;
}

.quill /deep/ .ql-container {
  height: 300px;
}
</style>
