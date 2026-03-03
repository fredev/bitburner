export function Button(props: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button {...props} style={style}>{props.children}</button>
  )
}

const style = {
  border: '1px solid red',
  padding: 8
}
