import 'firebase/analytics';

declare module 'firebase/analytics' {
  interface CustomEventMap {
    page_view: {
      page_location: string;
      page_path: string;
    };
  }
}