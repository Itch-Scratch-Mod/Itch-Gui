import React from 'react';
import { FormattedMessage } from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

import twIcon from './tw/tw.svg';

import customExtensionIcon from './custom/custom.svg';

import filesExtensionIcon from './penguinmod/extensions/files.png';
import jgWebsiteRequestsExtensionIcon from './penguinmod/extensions/websiteRequests.png'
import jgJSONExtensionIcon from './penguinmod/extensions/json.png'
import jgRuntimeExtensionIcon from './penguinmod/extensions/runtime.png'
import jgPrismExtensionIcon from './penguinmod/extensions/prism.png'

import jwUniteExtensionIcon from './penguinmod/extensions/Unite.png'
import jwUniteInsetIcon from './penguinmod/extensions/UniteSmall.png'

import jwProtoExtensionIcon from './penguinmod/extensions/Proto.svg'

import jwStructsExtensionIcon from './penguinmod/extensions/ooplogo.png'

import textExtensionIcon from './penguinmod/extensions/textext.png'

// griffpatch stuff that hopefully we can keep pls plsplspl !!S!
import griffpatchPhysicsThumb from './penguinmod/extensions/griffpatch_physics.png'
import griffpatchPhysicsIcon from './penguinmod/extensions/griffpatch_physicsIcon.svg'

import typescratchIcon from  './itch/typescratch/icon.png'
import typescratchThumb from  './itch/typescratch/thumb.png'

export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="File Blocks"
                description="Name of Files extension"
                id="jgFiles.jgFilesExtension.name"
            />
        ),
        extensionId: 'jgFiles',
        iconURL: filesExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Blocks for reading and creating files."
                description="Description of Files extension"
                id="jgFiles.jgFilesExtension.description"
            />
        ),
        featured: true,
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Website Request Blocks"
                description="Name of Website Requests extension"
                id="jgWebsiteRequests.jgWebsiteRequestsExtension.name"
            />
        ),
        extensionId: 'jgWebsiteRequests',
        iconURL: jgWebsiteRequestsExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Blocks to communicate with APIs and websites."
                description="Description of Website Requests extension"
                id="jgWebsiteRequests.jgWebsiteRequestsExtension.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true,
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="JSON Blocks"
                description="Name of JSON extension"
                id="jgJSON.jgJSONExtension.name"
            />
        ),
        extensionId: 'jgJSON',
        iconURL: jgJSONExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Blocks for handling JSON objects. Arrays are not supported yet."
                description="Description of JSON extension"
                id="jgJSON.jgJSONExtension.description"
            />
        ),
        featured: true,
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Unite"
                description="Name of Unite extension"
                id="jwUnite.jwUniteExtension.name"
            />
        ),
        extensionId: 'jwUnite',
        iconURL: jwUniteExtensionIcon,
        insetIconURL: jwUniteInsetIcon,
        description: (
            <FormattedMessage
                defaultMessage="Useful blocks that should of been added to scratch already"
                description="Description of Unite extension"
                id="jwUnite.jwUniteExtension.description"
            />
        ),
        featured: true,
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Proto"
                description="Name of Proto extension"
                id="jwProto.jwProtoExtension.name"
            />
        ),
        extensionId: 'jwProto',
        iconURL: jwProtoExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Labelling, Placeholders and Defenitions packed into one sweet extension"
                description="Description of Proto extension"
                id="jwProto.jwProtoExtension.description"
            />
        ),
        featured: true,
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Structs"
                description="Name of Structs extension"
                id="jwStructs.jwStructsExtension.name"
            />
        ),
        extensionId: 'jwStructs',
        iconURL: jwStructsExtensionIcon,
        insetIconURL: jwStructsExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Structs for struct things. Useful for OOP."
                description="Description of Structs extension"
                id="jwStructs.jwStructsExtension.description"
            />
        ),
        featured: true,
    },
    /*{
        name: (
            <FormattedMessage
                defaultMessage="Text"
                description="Name of Text extension"
                id="text.TextExtension.name"
            />
        ),
        extensionId: 'text',
        iconURL: textExtensionIcon,
        insetIconURL: textExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Use dynamic text for instructions, dialogue, and more!"
                description="Description of Text extension"
                id="text.textExtension.description"
            />
        ),
        featured: true,
    },*/
    {
        name: (
            <FormattedMessage
                defaultMessage="Prism"
                description="Name of Prism extension"
                id="jgPrism.jgPrismExtension.name"
            />
        ),
        extensionId: 'jgPrism',
        iconURL: jgPrismExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Blocks for specific use-cases or major convenience."
                description="Description of Prism extension"
                id="jgPrism.jgPrismExtension.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true,
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Runtime tools"
                description="Name of Runtime extension"
                id="jgRuntime.jgRuntimeExtension.name"
            />
        ),
        extensionId: 'jgRuntime',
        iconURL: jgRuntimeExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Blocks for updating Scratch objects like the stage."
                description="Description of Runtime extension"
                id="jgRuntime.jgRuntimeExtension.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true,
    },
    {
        name: 'Physics',
        extensionId: 'griffpatch',
        collaborator: 'Griffpatch',
        iconURL: griffpatchPhysicsThumb,
        insetIconURL: griffpatchPhysicsIcon,
        description: (
            <FormattedMessage
                defaultMessage="Box2D Physics extension created by Griffpatch."
                description="Description for the 'Griffpatch' extension"
                id="gui.extension.test.description"
            />
        ),
        featured: true,
        disabled: false
    },
    {
        name: 'TypeScratch',
        extensionId: 'typescratch',
        collaborator: 'jwklong',
        iconURL: typescratchThumb,
        insetIconURL: typescratchIcon,
        description: (
            <FormattedMessage
                defaultMessage="Brings all the sweet dynamic type support from TypeScript to your project!"
                description="Description for the 'TypeScratch' extension"
                id="gui.extension.typescratch.description"
            />
        ),
        featured: true,
        disabled: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="TurboWarp Blocks"
                description="Name of TW extension"
                id="tw.twExtension.name"
            />
        ),
        extensionId: 'tw',
        iconURL: twIcon,
        description: (
            <FormattedMessage
                defaultMessage="Weird new blocks. Not compatible with Scratch."
                description="Description of TW extension"
                id="tw.twExtension.description"
            />
        ),
        featured: true,
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Custom Extension"
                description="Name of custom extension category"
                id="tw.customExtension.name"
            />
        ),
        extensionId: '',
        iconURL: customExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Load custom extensions from URLs. For developers. Experimental."
                description="Description of custom extension category"
                id="tw.customExtension.description"
            />
        ),
        featured: true
    }
];
