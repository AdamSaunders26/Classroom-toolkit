// import { FormControl } from "@/components/ui/form";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { ControllerRenderProps } from "react-hook-form";

// interface Props {
//   field: ControllerRenderProps<
//     {
//       name: string;
//       yearGroup: number;
//     },
//     "yearGroup"
//   >;
// }

// export default function YearGroupSelect({ field }: Props) {
//   return (
//     <Select onValueChange={field?.onChange} defaultValue={field?.value}>
//       <FormControl>
//         <SelectTrigger className="w-[180px]">
//           <SelectValue placeholder="Year Group" />
//         </SelectTrigger>
//       </FormControl>
//       <SelectContent>
//         <SelectItem value="0">EYFS</SelectItem>
//         <SelectItem value="1">1</SelectItem>
//         <SelectItem value="2">2</SelectItem>
//         <SelectItem value="3">3</SelectItem>
//         <SelectItem value="4">4</SelectItem>
//         <SelectItem value="5">5</SelectItem>
//         <SelectItem value="6">6</SelectItem>
//         <SelectItem value="7">7</SelectItem>
//         <SelectItem value="8">8</SelectItem>
//         <SelectItem value="9">9</SelectItem>
//         <SelectItem value="10">10</SelectItem>
//         <SelectItem value="11">11</SelectItem>
//         <SelectItem value="12">12</SelectItem>
//         <SelectItem value="13">13</SelectItem>
//       </SelectContent>
//     </Select>
//   );
// }
