setStateAsync(state) {
    return new Promise((resolve) => {
    this.setState(state, resolve)
  })
}