import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../AuthContext/AuthContext';

const Profile: React.FC = () => {
    const { user } = useAuth();

    if (!user) {
        return <p>Loading...</p>; // O podrías redirigir a la página de inicio de sesión si el usuario no está autenticado
    }

    return (
        <div className="flex justify-center mt-36">
            <Card sx={{ maxWidth: 600, width: '100%' }}>
                <CardContent>
                    <div className="flex flex-col items-center">
                        <Avatar
                            alt="Profile Picture"
                            src="/static/images/avatar/1.jpg" // Placeholder or static image
                            sx={{ width: 100, height: 100 }}
                        />
                    </div>
                    <dl className="divide-y divide-gray-200 mt-4">
                        <div className="flex items-center justify-between py-3">
                            <div className="flex-1">
                                <Typography variant="subtitle1" color="textPrimary" gutterBottom>
                                    Username
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {user.username}
                                </Typography>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-3">
                            <div className="flex-1">
                                <Typography variant="subtitle1" color="textPrimary" gutterBottom>
                                    Email
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {user.email}
                                </Typography>
                            </div>
                        </div>
                    </dl>
                </CardContent>
            </Card>
        </div>
    );
};

export default Profile;