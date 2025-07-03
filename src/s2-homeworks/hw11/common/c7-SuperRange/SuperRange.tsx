import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import {green} from "@mui/material/colors";

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ color: 'green'// стили для слайдера // пишет студент
                
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
