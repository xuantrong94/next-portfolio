export interface ICustomLink {
  href: string;
  title: string;
  className: string | '';
}

export interface ICustomMobileLink extends ICustomLink {
  toggle: () => void;
}
