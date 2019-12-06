import React from 'react'

interface HocState {
  isLoading: boolean
}

interface ComponentProps {
  isLoading: boolean
}

export default function withLoading(
  Component:
    | React.ComponentClass<ComponentProps>
    | React.FunctionComponent<ComponentProps>
) {
  class Hoc extends React.Component<{}, HocState> {
    state: HocState = {
      isLoading: true
    }

    componentDidMount = () => {
      setTimeout(() => this.setState({ isLoading: false }), 2000)
    }

    render() {
      return <Component isLoading={this.state.isLoading} />
    }
  }

  return Hoc
}
