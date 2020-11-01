export type ChromaColor = "red" | "green" | "blue";

export type IHandleConfigs = {
	handleBackgroundColor: (color: ChromaColor) => void;
	handleBackgroundImage: (image: any) => void;
};

export type IChromaConfigs = {
	chromaColor: ChromaColor;
	backgroundImage: any;
};
