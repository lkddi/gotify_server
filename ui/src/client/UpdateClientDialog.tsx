import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import {useI18n} from '../i18n/I18nContext';

interface IProps {
    fClose: VoidFunction;
    fOnSubmit: (name: string) => Promise<void>;
    initialName: string;
}

const UpdateClientDialog = ({fClose, fOnSubmit, initialName = ''}: IProps) => {
    const [name, setName] = useState(initialName);
    const {t} = useI18n();

    const submitEnabled = name.length !== 0;
    const submitAndClose = async () => {
        await fOnSubmit(name);
        fClose();
    };

    return (
        <Dialog open={true} onClose={fClose} aria-labelledby="form-dialog-title" id="client-dialog">
            <DialogTitle id="form-dialog-title">{t('clients.dialog.updateTitle')}</DialogTitle>
            <DialogContent>
                <DialogContentText>{t('clients.dialog.help')}</DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    className="name"
                    label={t('apps.dialog.name')}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={fClose}>{t('common.cancel')}</Button>
                <Tooltip title={submitEnabled ? '' : t('common.required.name')}>
                    <div>
                        <Button
                            className="update"
                            disabled={!submitEnabled}
                            onClick={submitAndClose}
                            color="primary"
                            variant="contained">
                            {t('common.update')}
                        </Button>
                    </div>
                </Tooltip>
            </DialogActions>
        </Dialog>
    );
};

export default UpdateClientDialog;
