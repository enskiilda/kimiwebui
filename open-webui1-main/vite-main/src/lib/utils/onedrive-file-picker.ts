interface PickerResult {
	command?: string;
	items?: any[];
	[key: string]: any;
}

export async function openOneDrivePicker(
	authorityType?: 'personal' | 'organizations'
): Promise<PickerResult | null> {
	return null;
}

export async function pickAndDownloadFile(
	authorityType?: 'personal' | 'organizations'
): Promise<{ blob: Blob; name: string } | null> {
	return null;
}

export async function downloadOneDriveFile(
	fileInfo: any,
	authorityType?: 'personal' | 'organizations'
): Promise<Blob> {
	throw new Error('OneDrive integration not available');
}
