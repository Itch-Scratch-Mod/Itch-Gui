const available = () => !!window.showSaveFilePicker;

const showSaveFilePicker = fileName => window.showSaveFilePicker({
    suggestedName: fileName,
    types: [
        {
            description: 'Itch Project',
            accept: {
                'application/x.itch.ich': '.ich'
            }
        }
    ],
    excludeAcceptAllOption: true
});

const showOpenFilePicker = async () => {
    const [handle] = await window.showOpenFilePicker({
        multiple: false,
        types: [
            {
                description: 'Itch Project',
                accept: {
                    'application/x.itch.ich': '.ich'
                }
            },
            {
                description: 'Scratch Project',
                accept: {
                    'application/x.scratch.sb3': ['.sb', '.sb2', '.sb3']
                }
            }
        ]
    });
    return handle;
};

const createWritable = handle => handle.createWritable();

const closeWritable = async writable => {
    await writable.close();
};

const writeToWritable = async (writable, content) => {
    await writable.write(content);
};

export default {
    available,
    showOpenFilePicker,
    showSaveFilePicker,
    createWritable,
    closeWritable,
    writeToWritable
};
