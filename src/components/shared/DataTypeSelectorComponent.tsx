import {DataType} from "./types/projectRequest";
import React, {useEffect, useState} from "react";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

type PropsDataTypeSelector = {
    value: DataType
    onChange: (value: DataType) => void
}
const DataTypeSelectorComponent: React.FC<PropsDataTypeSelector> = (props: PropsDataTypeSelector) => {

    const dataTypes = Object.values(DataType)

    const [selectedDataType, setSelectedDataType] = useState<DataType>(props.value)

    useEffect(() => {
        props.onChange(selectedDataType)
    }, [selectedDataType])

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedDataType(event.target.value as DataType)
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl size="small" fullWidth>
                <InputLabel>Datentyp</InputLabel>
                <Select
                    value={selectedDataType}
                    label="Datentyp"
                    onChange={handleChange}
                >
                    {dataTypes.map((dataType) =>
                        <MenuItem key={dataType} value={dataType}>{dataType}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    );
}

export default DataTypeSelectorComponent