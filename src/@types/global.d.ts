import { RouteComponentProps } from 'react-router-dom'

declare global {
  interface ICommonProps<P = AnyObject> extends RouteComponentProps<P>, AnyObject {
    [key: string]: any
  }

  type AnyObject<T = any> = Record<string, T>
}

declare let $: any
