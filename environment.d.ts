declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DATABASE_URL:string
        EMAIL_FROM:string
        EMAIL_SERVER:string
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}
