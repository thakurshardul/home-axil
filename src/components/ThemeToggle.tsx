import { MoonIcon,SunIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"

export function ThemeToggle() {
  const { theme,setTheme } = useTheme()

  return (
    <div className="mr-3">
      <Button onClick={()=>setTheme(theme==="dark"?"light":"dark")}>
        <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all duration-900 dark:rotate-90 dark:scale-0 "/>
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all duration-900 dark:rotate-0 dark:scale-100 "/>
      </Button>
    </div>
  )
}
