import React, {useState, useEffect} from "react";
import { useMediaQuery } from "react-responsive";

const DARK_CLASS = "dark";

function DarkToggle() {
    const systemPrefersDark = useMediaQuery(
        {
          query: "(prefers-color-scheme: dark)"
        },
        undefined,
        prefersDark => {
          setisDark(prefersDark);
        }
      );

      const [isDark, setisDark] = useState(systemPrefersDark);

      useEffect(() => {
        // whatever we put here will run whenever `isDark` changes
        if (isDark) {
                    document.documentElement.classList.add(DARK_CLASS)
               } else {
                     document.documentElement.classList.remove(DARK_CLASS)
               }
      }, [isDark]);

    return(
        <input type="checkbox" checked={isDark} onChange={event => setisDark(event.target.checked)}></input>
    );
}

export default DarkToggle;