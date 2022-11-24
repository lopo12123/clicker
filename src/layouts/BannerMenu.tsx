import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

/**
 * @description dial 选项列表
 */
const DialItems = [
    { icon: <div>1</div>, tooltip: '1' },
    { icon: <div>2</div>, tooltip: '2' },
    { icon: <div>3</div>, tooltip: '3' },
    { icon: <div>4</div>, tooltip: '4' },
]

export default function BannerMenu() {
    return (
        <div className="w-full h-12 border-b-[1px] border-blue-light bg-b10">
            <div className="absolute w-20 h-20 top-0 left-0 border-b-2 border-blue-light rounded-br-full bg-b10">
                <SpeedDial ariaLabel="main-menu" direction="down" icon={ <div>11</div> } open={true}>
                    {
                        DialItems.map(({ icon, tooltip }) => (
                            <SpeedDialAction icon={ <SpeedDialIcon icon={ icon }/> } tooltipTitle={ tooltip }/>
                        ))
                    }
                </SpeedDial>
            </div>
        </div>
    )
}