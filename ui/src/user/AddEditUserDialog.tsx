import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import {useI18n} from '../i18n/I18nContext';

interface IProps {
    name?: string;
    admin?: boolean;
    fClose: VoidFunction;
    fOnSubmit: (name: string, pass: string, admin: boolean) => Promise<void>;
    isEdit?: boolean;
}

const AddEditUserDialog = ({
    fClose,
    fOnSubmit,
    isEdit,
    name: initialName = '',
    admin: initialAdmin = false,
}: IProps) => {
    const [name, setName] = React.useState(initialName);
    const [pass, setPass] = React.useState('');
    const [admin, setAdmin] = React.useState(initialAdmin);
    const {t} = useI18n();

    const namePresent = name.length !== 0;
    const passPresent = pass.length !== 0 || isEdit;
    const submitAndClose = async () => {
        await fOnSubmit(name, pass, admin);
        fClose();
    };
    return (
        <Dialog
            open={true}
            onClose={fClose}
            aria-labelledby="form-dialog-title"
            id="add-edit-user-dialog">
            <DialogTitle id="form-dialog-title">
                {isEdit ? t('users.dialog.editTitle').replace('{name}', name) : t('users.dialog.addTitle')}
            </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    className="name"
                    label={t('users.dialog.username')}
                    value={name}
                    name="username"
                    id="username"
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    className="password"
                    type="password"
                    value={pass}
                    fullWidth
                    label={isEdit ? t('users.dialog.passwordEdit') : t('users.dialog.password')}
                    name="password"
                    id="password"
                    onChange={(e) => setPass(e.target.value)}
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={admin}
                            className="admin-rights"
                            onChange={(e) => setAdmin(e.target.checked)}
                            value="admin"
                        />
                    }
                    label={t('users.dialog.adminRights')}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={fClose}>{t('common.cancel')}</Button>
                <Tooltip
                    placement={'bottom-start'}
                    title={
                        namePresent
                            ? passPresent
                                ? ''
                                : t('common.required.password')
                            : t('common.required.username')
                    }>
                    <div>
                        <Button
                            className="save-create"
                            disabled={!passPresent || !namePresent}
                            onClick={submitAndClose}
                            color="primary"
                            variant="contained">
                            {isEdit ? t('common.save') : t('common.create')}
                        </Button>
                    </div>
                </Tooltip>
            </DialogActions>
        </Dialog>
    );
};
export default AddEditUserDialog;
