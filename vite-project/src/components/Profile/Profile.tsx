import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';

const Profile = () => {
    // Estado para manejar la edición y los datos del perfil
    const [isEditing, setIsEditing] = React.useState(false);
    const [profileData, setProfileData] = React.useState({
        Foto: '',
        Nombre: 'John',
        Apellidos: 'Frusciante',
        Email: 'john@example.com',
        FechaNacimiento: '1970-03-14',
    });
    const [editableData, setEditableData] = React.useState(profileData);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setProfileData(editableData);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setEditableData(profileData); // Revertir los cambios si se cancela
        setIsEditing(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditableData({
            ...editableData,
            [name]: value
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditableData({
                    ...editableData,
                    Foto: reader.result as string // Corregido a 'Foto'
                });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex justify-center mt-36">
            <Card sx={{ maxWidth: 600, width: '100%' }}>
                <CardContent>
                    <div className="flex flex-col items-center">
                        <Avatar
                            alt="Profile Picture"
                            src={editableData.Foto || '/static/images/avatar/1.jpg'}
                            sx={{ width: 100, height: 100 }}
                        />
                        {isEditing && (
                            <Input
                                type="file"
                                onChange={handleFileChange}
                                sx={{ mt: 2 }}
                            />
                        )}
                    </div>
                    <dl className="divide-y divide-gray-200 mt-4">
                        {Object.keys(profileData).map((key) => (
                            key !== 'Foto' && (
                                <div key={key} className="flex items-center justify-between py-3">
                                    <div className="flex-1">
                                        <Typography variant="subtitle1" color="textPrimary" gutterBottom>
                                            {key.charAt(0).toUpperCase() + key.slice(1)}
                                        </Typography>
                                        {isEditing ? (
                                            <TextField
                                                type={key === 'FechaNacimiento' ? 'date' : 'text'}
                                                name={key}
                                                value={editableData[key as keyof typeof editableData]}
                                                onChange={handleChange}
                                                className="w-full"
                                                InputLabelProps={key === 'FechaNacimiento' ? { shrink: true } : {}}
                                            />
                                        ) : (
                                            <Typography variant="body2" color="textSecondary">
                                                {key === 'FechaNacimiento' ? new Date(editableData[key as keyof typeof editableData]).toLocaleDateString() : editableData[key as keyof typeof editableData]}
                                            </Typography>
                                        )}
                                    </div>
                                    {!isEditing && (
                                        <IconButton
                                            onClick={handleEditClick}
                                            size="small"
                                            sx={{ color: 'gray' }}
                                        >
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    )}
                                    {isEditing && (
                                        <div className="flex space-x-2">
                                            <IconButton
                                                onClick={handleSaveClick}
                                                size="small"
                                                sx={{ color: 'green' }}
                                            >
                                                <SaveIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton
                                                onClick={handleCancelClick}
                                                size="small"
                                                sx={{ color: 'red' }}
                                            >
                                                <CancelIcon fontSize="small" />
                                            </IconButton>
                                        </div>
                                    )}
                                </div>
                            )
                        ))}
                    </dl>
                </CardContent>
            </Card>
        </div>
    );
};

export default Profile;
