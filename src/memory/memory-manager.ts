export class MemoryManager {
    buffer: ArrayBuffer;
    private dataView: DataView;

    constructor(private sizeInBytes: number) {
        this.buffer = new ArrayBuffer(sizeInBytes);
        this.dataView = new DataView(this.buffer);
    }

    getByte(address: number): number {
        this.validateAddress(address);

        return this.dataView.getUint8(address);
    }

    setByte(address: number, value: number): void {
        this.validateAddress(address);

        this.dataView.setUint8(address, value);
    }

    getWord(address: number): number {
        this.validateAddress(address);

        return this.dataView.getUint16(address);
    }

    setWord(address: number, value: number): void {
        this.validateAddress(address);

        this.dataView.setUint16(address, value);
    }

    viewMemoryAtAddress(address: number): void {
        const eightBytes = Array.from({length: 8}, (_, index) => {
            if (address + index >= this.sizeInBytes) {
                return null;
            }

            return this.getByte(address + index); 
        })
        .filter(v => v !== null)
        .map(v => `0x${v!.toString(16).padStart(2, '0')}`);

        console.log(`0x${address.toString(16).padStart(4, '0')}: ${eightBytes.join(' ')}`);
    }

    private validateAddress(address: number) {
        if (address > this.sizeInBytes - 1) {
            throw new Error(`Memory address ${address} is beyond the allocated size of ${this.sizeInBytes}`);
        }
    }
    
}