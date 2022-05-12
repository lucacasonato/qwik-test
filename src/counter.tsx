import { component$, useStore } from "@builder.io/qwik";

export const Counter = component$(
  (props: { step?: number; initial?: number }) => {
    const store = useStore({ count: props.initial || 0 });

    return (
      <button onClick$={() => (store.count += props.step || 1)}>
        {store.count}
      </button>
    );
  },
);
