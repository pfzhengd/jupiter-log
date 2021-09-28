export type TDate = {
  years: string | number
  months: string | number
  days: string | number
  hours: string | number
  minutes: string | number
  seconds: string | number
}

export type TMode = "development" | "production"

export type TConfig = {
  moduleName:string,
  mode:TMode
}