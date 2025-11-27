import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Visibility from '@mui/icons-material/Visibility';
import Copy from '@mui/icons-material/FileCopyOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, {CSSProperties} from 'react';
import {useStores} from '../stores';
import {useI18n} from '../i18n/I18nContext';

interface IProps {
    value: string;
    style?: CSSProperties;
}

const CopyableSecret = ({value, style}: IProps) => {
    const [visible, setVisible] = React.useState(false);
    const text = visible ? value : '•••••••••••••••';
    const {snackManager} = useStores();
    const {t} = useI18n();
    const toggleVisibility = () => setVisible((b) => !b);
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(value);
            snackManager.snack(t('copy.success'));
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
            snackManager.snack(t('copy.fail'));
        }
    };
    return (
        <div style={style}>
            <IconButton onClick={copyToClipboard} title={t('copy.tooltip')} size="large">
                <Copy />
            </IconButton>
            <IconButton onClick={toggleVisibility} className="toggle-visibility" size="large">
                {visible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            <Typography style={{fontFamily: 'monospace', fontSize: 16}}>{text}</Typography>
        </div>
    );
};

export default CopyableSecret;
