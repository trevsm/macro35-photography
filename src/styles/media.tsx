const mobile = (styles: string) => /*css*/ `
  @media (max-width: 500px) {
    ${styles}
  }
`;

const tablet = (styles: string) => /*css*/ `
  @media (max-width: 800px) {
    ${styles}
  }
`;

const desktop = (styles: string) => /*css*/ `
  @media (min-width: 801px) {
    ${styles}
  }
`;

export const media = ({
  mobileStyles,
  tabletStyles,
  desktopStyles,
}: {
  mobileStyles?: string;
  tabletStyles?: string;
  desktopStyles?: string;
}) => /*css*/ `
  ${desktopStyles ? desktop(desktopStyles) : ""}
  ${tabletStyles ? tablet(tabletStyles) : ""}
  ${mobileStyles ? mobile(mobileStyles) : ""}
`;
