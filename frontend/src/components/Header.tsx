import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronLeft, MessageSquare } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useNavigate } from "react-router-dom"

interface HeaderProps {
  setIsChatOpen: (open: boolean) => void
  isChatOpen: boolean
  handleDropdownChange: (mode: string) => void
  analysisMode: "Image Analysis" | "Manual"
}


export function Header({ setIsChatOpen, isChatOpen, handleDropdownChange, analysisMode }: HeaderProps) {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center mb-4">
      <Button onClick={() => navigate("/")}>
        <ChevronLeft />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" className="flex items-center bg-background hover:bg-muted p-4 text-foreground">
            <h1 className="text-2xl font-bold ">{analysisMode}</h1>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleDropdownChange('Image Analysis')}>
            Image Analysis
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDropdownChange('Manual')}>
            Manual
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>


      <div className="flex space-x-2">
        <ModeToggle />
        <Button
          variant="ghost"
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="md:hidden"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
