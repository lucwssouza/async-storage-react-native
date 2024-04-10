import { StyleSheet, TextInput } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        width: 210,
        marginTop: 10,
        marginBottom: 10,
        height: 40,
        borderWidth: 1,
        textAlign: 'center'
    },
    resultTitle: {
        fontSize: 40,
        color: '#1d5571',
        fontWeight: 'bold',
    },
    texto2: {
        fontSize: 20,
        color: '#1d5571',
        fontWeight: 'bold',
    },
    fofinhodotio: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    correcao: {
        display: 'flex',
        flexDirection: 'row'
    },
    icone: {
        height: 20,
        width: 20
    },
    textonok: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
    },

})