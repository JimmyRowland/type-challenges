


declare function SimpleVue<D, C extends Record<string, (...args: any[]) => any>,
  M extends Record<string, (...args: any[]) => any>>(options: {data: () => D & ThisType<never>, computed: C & ThisType<D>, methods: M & ThisType<D & C & M>}): any
