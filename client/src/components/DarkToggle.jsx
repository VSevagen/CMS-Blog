import {useEffect} from "react";
import createPersistedState from 'use-persisted-state';
import { useMediaQuery } from "react-responsive";
import Switch from "react-switch";
import "../styles/main.css"

const DARK_CLASS = "dark";

function DarkToggle() {

    const useDarkState = createPersistedState('isDark')
    const systemPrefersDark = useMediaQuery(
        {
          query: "(prefers-color-scheme: dark)"
        },
        undefined,
        prefersDark => {
          setisDark(prefersDark);
        }
      );

      const [isDark, setisDark] = useDarkState(systemPrefersDark);

      useEffect(() => {
        // whatever we put here will run whenever `isDark` changes
        if (isDark) {
                    document.documentElement.classList.add(DARK_CLASS)
               } else {
                     document.documentElement.classList.remove(DARK_CLASS)
               }
      }, [isDark]);

      function handleChange() {
        if(isDark) {
          setisDark(false)
        } else {
          setisDark(true)
        }
      }

    return(
        <Switch  checked={isDark} onChange={handleChange} className="switch" uncheckedIcon={false} checkedIcon={false} onHandleColor="#fff" onColor="#000"/>
    );
}

export default DarkToggle;