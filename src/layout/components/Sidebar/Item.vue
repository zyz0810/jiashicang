<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    const imgPath = './../../../assets/image/'
    if (icon) {
      console.log(imgPath)
      // vnodes.push(<svg-icon icon-class={icon}/>)
      vnodes.push(<image src={imgPath+icon}></image>)
    }

    if (title) {
      vnodes.push(<p slot='title'>{(title)}</p>)
    }
    return vnodes
  }
}
</script>
