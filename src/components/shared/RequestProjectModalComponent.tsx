import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {SxProps, TextField} from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {DataType, Page, ProjectRequestType} from "./types/projectRequest";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from "@mui/material/IconButton";
import {v4 as uuid} from 'uuid';
import DataTypeSelectorComponent from "./DataTypeSelectorComponent";

type Props = {
    open: boolean
    onSave: (data: ProjectRequestType) => void
    onClose: () => void
}

const INITIAL_PROJECT_REQUEST: ProjectRequestType = {
    appName: "",
    entity: "",
    properties: [
        {id: uuid(), name: "id", value: DataType.STRING},
    ],
    pages: new Set([Page.ENTITY_LIST_PAGE])
}

const RequestProjectModalComponent: React.FC<Props> = (props: Props) => {

    const [projectRequest, setProjectRequest] = useState<ProjectRequestType>(INITIAL_PROJECT_REQUEST)

    const addProperty = () => {
        setProjectRequest(prevState => {
            return {
                ...prevState,
                properties: [...projectRequest.properties, {id: uuid(), name: "", value: DataType.STRING}],
            }
        })

    }

    const handleChange = (event: any) => {
        setProjectRequest(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleKeyChange = (event: any) => {
        setProjectRequest(prevState => {
            return {
                ...prevState,
                properties: projectRequest.properties.map(prop => {
                    if (prop.id === event.target.name) {
                        return {
                            ...prop,
                            name: event.target.value.trim().toLowerCase()
                        }
                    }
                    return prop
                })
            }
        })
    }

    const handleDataTypeChange = (id: string, value: string) => {
        setProjectRequest(prevState => {
            return {
                ...prevState,
                properties: projectRequest.properties.map(prop => {
                    if (prop.id === id) {
                        return {
                            ...prop,
                            value: value.trim().toLowerCase() as DataType
                        }
                    }
                    return prop
                })
            }
        })
    }

    const deleteProperty = (id: string) => {
        setProjectRequest(prevState => ({
            ...prevState,
            properties: prevState.properties.filter(prop => prop.id !== id)
        }))
    }

    const checkPage = (page: Page) => {
        const pages = Array.from(projectRequest.pages)
        let pagesToUpdate: Page[] = []
        if (pages.find(p => p === page)) {
            pagesToUpdate = pages.filter(p => p !== page)
        }

        if (!pages.find(p => p === page)) {
            pagesToUpdate = [...pages, page]
        }
        setProjectRequest(prevState => ({
            ...prevState,
            pages: new Set(pagesToUpdate)
        }))
    }

    const handleClose = () => {
        setProjectRequest(INITIAL_PROJECT_REQUEST)
        props.onClose()
    }

    const sendRequest = () => {
        props.onSave(projectRequest)
        handleClose()
    }

    return (
        <Dialog open={props.open} maxWidth="sm" fullWidth>
            <DialogTitle sx={{ fontWeight: "bold", mb: -1 }}>
                Projekt anfragen
            </DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ mb: 2 }}>
                    Fülle das Formular aus.
                </DialogContentText>
                <Box sx={InputFieldsContainer}>
                    <TextField
                        label="Anwendungsname"
                        name={"appName"}
                        value={projectRequest.appName}
                        size="small"
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Entität"
                        name={"entity"}
                        value={projectRequest.entity}
                        size="small"
                        onChange={handleChange}
                        fullWidth
                    />
                    <Box sx={InputFieldsContainer}>
                        <Typography variant="body1">Eigenschaften der Entität</Typography>
                        <Box sx={InputFieldsForPropertiesContainer}>
                            {projectRequest.properties.map((prop, idx) =>
                                <Box key={idx} sx={InputFieldContainerForEntityProperties}>
                                    <TextField
                                        label="Schlüssel"
                                        value={prop.name}
                                        name={prop.id}
                                        size="small"
                                        error={prop.name === ""}
                                        helperText={prop.name === "" ? "Fülle erst dieses Feld aus!" : " "}
                                        onChange={handleKeyChange}
                                        fullWidth
                                    />
                                    <DataTypeSelectorComponent
                                        value={prop.value}
                                        onChange={(dataType) => handleDataTypeChange(prop.id, dataType)}
                                    />
                                    <IconButton
                                        color="error"
                                        sx={{ border: "1px solid #c4c4c4", borderRadius: 2 }}
                                        size="medium"
                                        onClick={() => deleteProperty(prop.id)}
                                    >
                                        <DeleteOutlineIcon/>
                                    </IconButton>
                                </Box>
                            )}
                        </Box>
                        <Button
                            variant="outlined"
                            onClick={addProperty}
                            sx={{ mt: -1 }}
                        >Neue Eigenschaft
                        </Button>
                    </Box>
                    <FormGroup id="form" sx={{ justifySelf: "start" }}>
                        <Typography variant="body1">Seiten</Typography>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={projectRequest.pages.has(Page.HOMEPAGE)}
                                    onClick={() => checkPage(Page.HOMEPAGE)}
                                />
                            }
                            label="Startseite"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={projectRequest.pages.has(Page.ENTITY_LIST_PAGE)}
                                    onClick={() => checkPage(Page.ENTITY_LIST_PAGE)}
                                />
                            }
                            label="Seite mit Liste der Entitäten"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={projectRequest.pages.has(Page.ENTITY_VIEW_PAGE)}
                                    onClick={() => checkPage(Page.ENTITY_VIEW_PAGE)}
                                />
                            }
                            label="Seite zur Ansicht einer Entität"
                        />
                    </FormGroup>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Schließen</Button>
                <Button onClick={sendRequest}>Anfragen</Button>
            </DialogActions>
        </Dialog>
    )
}
const InputFieldsContainer: SxProps = () => ({
    display: "grid",
    gridGap: "var(--space-5)",
})
const InputFieldsForPropertiesContainer: SxProps = () => ({
    display: "grid",
    gridGap: "var(--space-1)",
})
const InputFieldContainerForEntityProperties: SxProps = () => ({
    display: "grid",
    gridTemplateColumns: "2fr 1fr auto",
    gridGap: "var(--space-3)",
    alignItems: "start",
})
export default RequestProjectModalComponent
