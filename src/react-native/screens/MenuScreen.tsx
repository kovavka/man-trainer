import React, {CSSProperties} from 'react';

const fontSizePrimary = 18
const fontSizeTitle = 24

const STYLE_FLEX_VERTICAL_CENTER: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const STYLES: Record<string, CSSProperties> = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        ...STYLE_FLEX_VERTICAL_CENTER,
        justifyContent: 'center',
    },
    name: {
        fontSize: fontSizeTitle,
        padding: 4,
    },
    description: {

    },
    list: {
        flexGrow: 2,
        ...STYLE_FLEX_VERTICAL_CENTER,
    },
    listItem: {
        padding: 4,
        width: 220,
        textAlign: 'center',
        border: '1px solid #a5a5a5',
        borderRadius: 4,
        marginBottom: 8,
    },
    listItemOnClick: {
        backgroundColor: '#ffffff1a'
    }
}

export const MenuScreen: React.FC<{}> = () => {
    return <div style={STYLES.root}>
        <div style={STYLES.title}>
            <div style={STYLES.name}>Manzu</div>
            <div style={STYLES.description}>Mahjong trainer</div>
        </div>
        <div style={STYLES.list}>
            <div style={STYLES.listItem}>Chinitsu</div>
            <div style={STYLES.listItem}>Blind hand</div>
        </div>
    </div>
}