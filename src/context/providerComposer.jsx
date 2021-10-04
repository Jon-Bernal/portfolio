import React from "react";
import { OsThemeProvider, MsProvider } from "./allcontexts/index";

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer contexts={[<OsThemeProvider />, <MsProvider />]}>
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
