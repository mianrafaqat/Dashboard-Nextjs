import { Header } from "@/Components";
import { useSateContext } from "@/contexts/ContextProvider";
import Funnel, {
  Title,
  Margin,
  Tooltip,
  Item,
  Border,
  Legend,
  Label,
  Font,
} from "devextreme-react/funnel";

const data = [
  { count: 75, level: "Junior Engineer" },
  { count: 95, level: "Mid-Level Engineer" },
  { count: 53, level: "Senior Engineer" },
  { count: 23, level: "Lead Engineer" },
  { count: 18, level: "Architect" },
];

export default function Pyramid() {
  const { currentMode } = useSateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl ">
      <Header category="chart" title="Pyramid" />

      <div
        style={{ backgroundColor: currentMode === "Dark" ? "#33373E" : "#fff" }}
      >
        <Funnel
          id="pyramid"
          dataSource={data}
          sortData={false}
          inverted={true}
          algorithm="dynamicHeight"
          palette="Harmony Light"
          argumentField="level"
          valueField="count"
          height={500}
          width={1000}
        >
          <Title text="Team Composition">
            <Margin bottom={30} />
          </Title>
          <Tooltip enabled={true} />
          <Item>
            <Border visible={true} />
          </Item>
          <Legend visible={true} />
          <Label
            visible={true}
            horizontalAlignment="left"
            backgroundColor="none"
          >
            <Font size={16} />
          </Label>
        </Funnel>
      </div>
    </div>
  );
}
