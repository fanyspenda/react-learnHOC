import * as React from 'react'
import withLoading from './withLoading'

interface TitleProps {
  isLoading: boolean
}

class Title extends React.Component<TitleProps> {
  render() {
    return this.props.isLoading ? <span>loading...</span> : <h1>Title</h1>
  }
}

export default withLoading(Title)
