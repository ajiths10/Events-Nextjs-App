import { ScriptableContext } from "chart.js";
import { IPagination } from "@/common/types/common";

export interface IGraphDataTypes {
  labels: string[];
  datasets: {
    fill: string;
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: (context: ScriptableContext<"line">) => CanvasGradient;
    lineTension: number;
  }[];
}

export interface GraphContainerT {
  data?: any[];
  paginationData: IPagination | undefined;
  pathId?: string | number;
}
