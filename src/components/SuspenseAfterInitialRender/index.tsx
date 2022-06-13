import * as React from "react";

function LifeCycle({ afterRender }: { afterRender(): void }) {
  React.useEffect(() => {
    afterRender();
  }, [afterRender]);
  return null;
}

export default function SuspenseAfterInitialRender({
  children,
  ...rest
}: React.SuspenseProps) {
  const [initialRender, setInitialRender] = React.useState(true);

  if (initialRender) {
    return (
      <React.Fragment>
        <LifeCycle afterRender={() => setInitialRender(false)} />
        {children}
      </React.Fragment>
    );
  }

  return <React.Suspense {...rest}>{children}</React.Suspense>;
}
