import { Header } from "@/Components"
import Pie from "@/Components/Charts/Pie"
import { useSateContext } from "@/contexts/ContextProvider";
export default function PieCharts () {
    const { currentMode } = useSateContext()
    return (
        <div  className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl ">
             <Header category="Pie" title="Pie Chart" />
             <div style={{backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff'}}>
                <Pie />
             </div>
        </div>
    )
}