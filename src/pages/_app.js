import '@/styles/globals.css'
import { createContext } from 'react';

const scrollFadeIn = () => {
  const callback = function (entries) {
    entries.forEach((entry) => {
      //console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-slideIn");
      } else {
        entry.target.classList.remove("animate-slideIn");
      }
    });
  };

  const observer = new IntersectionObserver(callback);

  const targets = document.querySelectorAll(".js-show-on-scroll");
  targets.forEach(function (target) {
    target.classList.add("opacity-0");
    observer.observe(target);
  });
};

export const ScrollContext = createContext( scrollFadeIn )

export default function App({ Component, pageProps }) {
  return (
    <ScrollContext.Provider value={ scrollFadeIn }>
      <Component {...pageProps} />
    </ScrollContext.Provider>
  )

}
