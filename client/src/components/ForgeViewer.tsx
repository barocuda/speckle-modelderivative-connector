import {useEffect} from "react";
import {initializeViewer} from "./ForgeViewerInitializer";
import React from "react";

const ForgeViewer = (props: {urn: string}) => {
	useEffect(() => {
		initializeViewer(props.urn);
	}, [props.urn]);

	return <div id="forgeviewer" />;
};

export default ForgeViewer;