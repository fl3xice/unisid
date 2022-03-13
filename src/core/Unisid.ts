import { reverseString } from "@src/utilities";

class Unisid {
	constructor(private data: string) {}
	public generate() {
		const reversedData = reverseString(this.data);
	}
}

export default Unisid;
