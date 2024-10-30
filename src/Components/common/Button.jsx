import React from 'react'

function Button(props) {
  const color=props.color==="red"?"bg-red-500" : props.color ==="blue"?"bg-blue-500":"bg-grey-500"

  return (
    <div>
        <Button className={`$ color`}>
{props.title}
        </Button>
    </div>
  )
}

export default Button