export type ChromaColor = "red" | "green" | "blue";

export type IHandleConfigs = {
	handleBackgroundColor: (color: ChromaColor, intensity: number) => void;
	handleBackgroundImage: (image: any) => void;
};

export type IChromaConfigs = {
	chromaColor: ChromaColor;
	chromaIntensity: number;
	backgroundImage: any;
};
