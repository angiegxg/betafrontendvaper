interface Environment {
    production: boolean
    apiUrl: string
  }
  
  const env: Environment = {
    production: false,
    apiUrl: "http://178.62.13.7:3001/",
  }
  
  export { env as environment }