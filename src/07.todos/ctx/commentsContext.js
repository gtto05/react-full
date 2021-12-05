import { createContext } from "react";

const commentContext = createContext()

const {Provider,Consumer} = commentContext

export {
  commentContext,
  Provider,
  Consumer
}