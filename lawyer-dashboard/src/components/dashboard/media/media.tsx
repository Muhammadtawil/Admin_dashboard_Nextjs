

"use client"
import MediaTable from "./mediaTable";
import { Button, Grid, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MediaCreateFolder from "./media_form";
import { useState } from "react";
import { successAlert } from "../alerts/alerts";
import { useTranslations } from "next-intl";

interface MediaComponentProps {
    OnCreate: any;
    Delete: any;
    media: any;
    AddFile: any;
}

export default function MediaComponent({
    OnCreate,
    Delete,
    media,
    AddFile,
}: MediaComponentProps) {

    const [selectedFile, setSelectedFile] = useState<File | ''>();

    const t = useTranslations('webFilesPage')
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
            console.log(e.target.files[0]);
        }
    };

    const handleUpload = async (folderName: any) => {
        const formData = new FormData();
        // Append the selected image to the formData
        if (selectedFile) {
            formData.append("file", selectedFile);
        }

        await AddFile(formData, folderName);

    // Reset the file input value
    const fileInput = document.getElementById("file") as HTMLInputElement;
    if (fileInput) {
        fileInput.value = '';
    }

    // Clear the selected file state
    setSelectedFile('');
    };

    return (
        <>
            <MediaCreateFolder onCreate={OnCreate} />
            {Object.keys(media).map((folderName, index) => (
                <Stack direction={"row"} spacing={4} key={folderName}>
                    <div>
                        <h2>{folderName}</h2>
                        <Grid item xs={6} textAlign="end" className="client-box">

                            <input
                                autoComplete="image"
                                name="file"
                                accept="*/*"
                                id="file"
                                type="file"
                                autoFocus
                                title={t('choose')} 
                                

                                onChange={(files) => handleImageChange(files)}
                            />
                            <Button
                                onClick={async () => handleUpload(folderName).then(() => {
                                    successAlert(t('success'));
                                    

                                })}
                                variant="contained"
                                sx={{
                                    mt: 1,
                                    textTransform: "capitalize",
                                    borderRadius: "8px",
                                    fontWeight: "500",
                                    fontSize: "13px",
                                    padding: "12px 20px 10px 10px",
                                    color: "#fff !important",
                                    backgroundColor: "#6b6bd4",
                                }}
                            >
                                <AddIcon
                                    sx={{
                                        position: "relative",
                                        top: "-2px",
                                    }}
                                    className="mr-5px"
                                />
                                {t('add')}

                            </Button>

                        </Grid>
                        <MediaTable
                            dataRows={media[folderName].files}
                            deleteMedia={Delete}
                            folderName={folderName}
                        />
                    </div>
                </Stack>
            ))}
        </>
    );
}