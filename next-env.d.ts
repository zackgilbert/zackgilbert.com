/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

declare module '*.mdx' {
  const content: React.ComponentType;
  export default content;
}
