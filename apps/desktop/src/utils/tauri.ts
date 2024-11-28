
// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

/** user-defined commands **/


export const commands = {
async getRecordingOptions() : Promise<RecordingOptions> {
    return await TAURI_INVOKE("get_recording_options");
},
async setRecordingOptions(options: RecordingOptions) : Promise<null> {
    return await TAURI_INVOKE("set_recording_options", { options });
},
async startRecording() : Promise<null> {
    return await TAURI_INVOKE("start_recording");
},
async stopRecording() : Promise<null> {
    return await TAURI_INVOKE("stop_recording");
},
async pauseRecording() : Promise<null> {
    return await TAURI_INVOKE("pause_recording");
},
async resumeRecording() : Promise<null> {
    return await TAURI_INVOKE("resume_recording");
},
async listCameras() : Promise<string[]> {
    return await TAURI_INVOKE("list_cameras");
},
async listCaptureWindows() : Promise<CaptureWindow[]> {
    return await TAURI_INVOKE("list_capture_windows");
},
async listCaptureScreens() : Promise<CaptureScreen[]> {
    return await TAURI_INVOKE("list_capture_screens");
},
async takeScreenshot() : Promise<null> {
    return await TAURI_INVOKE("take_screenshot");
},
async listAudioDevices() : Promise<string[]> {
    return await TAURI_INVOKE("list_audio_devices");
},
async closePreviousRecordingsWindow() : Promise<void> {
    await TAURI_INVOKE("close_previous_recordings_window");
},
async setFakeWindowBounds(name: string, bounds: Bounds) : Promise<null> {
    return await TAURI_INVOKE("set_fake_window_bounds", { name, bounds });
},
async removeFakeWindow(name: string) : Promise<null> {
    return await TAURI_INVOKE("remove_fake_window", { name });
},
async focusCapturesPanel() : Promise<void> {
    await TAURI_INVOKE("focus_captures_panel");
},
async getCurrentRecording() : Promise<JsonValue<RecordingInfo | null>> {
    return await TAURI_INVOKE("get_current_recording");
},
async exportVideo(videoId: string, project: ProjectConfiguration, progress: TAURI_CHANNEL<RenderProgress>, force: boolean) : Promise<string> {
    return await TAURI_INVOKE("export_video", { videoId, project, progress, force });
},
async copyFileToPath(src: string, dst: string) : Promise<null> {
    return await TAURI_INVOKE("copy_file_to_path", { src, dst });
},
async copyVideoToClipboard(path: string) : Promise<null> {
    return await TAURI_INVOKE("copy_video_to_clipboard", { path });
},
async copyScreenshotToClipboard(path: string) : Promise<null> {
    return await TAURI_INVOKE("copy_screenshot_to_clipboard", { path });
},
async openFilePath(path: string) : Promise<null> {
    return await TAURI_INVOKE("open_file_path", { path });
},
async getVideoMetadata(videoId: string, videoType: VideoType | null) : Promise<[number, number]> {
    return await TAURI_INVOKE("get_video_metadata", { videoId, videoType });
},
async createEditorInstance(videoId: string) : Promise<SerializedEditorInstance> {
    return await TAURI_INVOKE("create_editor_instance", { videoId });
},
async startPlayback(videoId: string) : Promise<void> {
    await TAURI_INVOKE("start_playback", { videoId });
},
async stopPlayback(videoId: string) : Promise<void> {
    await TAURI_INVOKE("stop_playback", { videoId });
},
async setPlayheadPosition(videoId: string, frameNumber: number) : Promise<void> {
    await TAURI_INVOKE("set_playhead_position", { videoId, frameNumber });
},
async setProjectConfig(videoId: string, config: ProjectConfiguration) : Promise<void> {
    await TAURI_INVOKE("set_project_config", { videoId, config });
},
async openEditor(id: string) : Promise<void> {
    await TAURI_INVOKE("open_editor", { id });
},
async openMainWindow() : Promise<void> {
    await TAURI_INVOKE("open_main_window");
},
async openPermissionSettings(permission: OSPermission) : Promise<void> {
    await TAURI_INVOKE("open_permission_settings", { permission });
},
async doPermissionsCheck(initialCheck: boolean) : Promise<OSPermissionsCheck> {
    return await TAURI_INVOKE("do_permissions_check", { initialCheck });
},
async requestPermission(permission: OSPermission) : Promise<void> {
    await TAURI_INVOKE("request_permission", { permission });
},
async uploadExportedVideo(videoId: string, mode: UploadMode) : Promise<UploadResult> {
    return await TAURI_INVOKE("upload_exported_video", { videoId, mode });
},
async uploadScreenshot(screenshotPath: string) : Promise<UploadResult> {
    return await TAURI_INVOKE("upload_screenshot", { screenshotPath });
},
async getRecordingMeta(id: string, fileType: string) : Promise<RecordingMeta> {
    return await TAURI_INVOKE("get_recording_meta", { id, fileType });
},
async saveFileDialog(fileName: string, fileType: string) : Promise<string | null> {
    return await TAURI_INVOKE("save_file_dialog", { fileName, fileType });
},
async listRecordings() : Promise<([string, string, RecordingMeta])[]> {
    return await TAURI_INVOKE("list_recordings");
},
async listScreenshots() : Promise<([string, string, RecordingMeta])[]> {
    return await TAURI_INVOKE("list_screenshots");
},
async checkUpgradedAndUpdate() : Promise<boolean> {
    return await TAURI_INVOKE("check_upgraded_and_update");
},
async openExternalLink(url: string) : Promise<null> {
    return await TAURI_INVOKE("open_external_link", { url });
},
async setHotkey(action: HotkeyAction, hotkey: Hotkey | null) : Promise<null> {
    return await TAURI_INVOKE("set_hotkey", { action, hotkey });
},
async deleteAuthOpenSignin() : Promise<null> {
    return await TAURI_INVOKE("delete_auth_open_signin");
},
async resetCameraPermissions() : Promise<null> {
    return await TAURI_INVOKE("reset_camera_permissions");
},
async resetMicrophonePermissions() : Promise<null> {
    return await TAURI_INVOKE("reset_microphone_permissions");
},
async isCameraWindowOpen() : Promise<boolean> {
    return await TAURI_INVOKE("is_camera_window_open");
},
async seekTo(videoId: string, frameNumber: number) : Promise<void> {
    await TAURI_INVOKE("seek_to", { videoId, frameNumber });
},
async sendFeedbackRequest(feedback: string) : Promise<null> {
    return await TAURI_INVOKE("send_feedback_request", { feedback });
},
async positionTrafficLights(controlsInset: [number, number] | null) : Promise<void> {
    await TAURI_INVOKE("position_traffic_lights", { controlsInset });
},
async globalMessageDialog(message: string) : Promise<void> {
    await TAURI_INVOKE("global_message_dialog", { message });
},
async showWindow(window: ShowCapWindow) : Promise<void> {
    await TAURI_INVOKE("show_window", { window });
},
async writeClipboardString(text: string) : Promise<null> {
    return await TAURI_INVOKE("write_clipboard_string", { text });
}
}

/** user-defined events **/


export const events = __makeEvents__<{
audioInputLevelChange: AudioInputLevelChange,
authenticationInvalid: AuthenticationInvalid,
currentRecordingChanged: CurrentRecordingChanged,
editorStateChanged: EditorStateChanged,
newNotification: NewNotification,
newRecordingAdded: NewRecordingAdded,
newScreenshotAdded: NewScreenshotAdded,
recordingMetaChanged: RecordingMetaChanged,
recordingOptionsChanged: RecordingOptionsChanged,
recordingStarted: RecordingStarted,
recordingStopped: RecordingStopped,
renderFrameEvent: RenderFrameEvent,
requestNewScreenshot: RequestNewScreenshot,
requestOpenSettings: RequestOpenSettings,
requestRestartRecording: RequestRestartRecording,
requestStartRecording: RequestStartRecording,
requestStopRecording: RequestStopRecording,
uploadProgress: UploadProgress
}>({
audioInputLevelChange: "audio-input-level-change",
authenticationInvalid: "authentication-invalid",
currentRecordingChanged: "current-recording-changed",
editorStateChanged: "editor-state-changed",
newNotification: "new-notification",
newRecordingAdded: "new-recording-added",
newScreenshotAdded: "new-screenshot-added",
recordingMetaChanged: "recording-meta-changed",
recordingOptionsChanged: "recording-options-changed",
recordingStarted: "recording-started",
recordingStopped: "recording-stopped",
renderFrameEvent: "render-frame-event",
requestNewScreenshot: "request-new-screenshot",
requestOpenSettings: "request-open-settings",
requestRestartRecording: "request-restart-recording",
requestStartRecording: "request-start-recording",
requestStopRecording: "request-stop-recording",
uploadProgress: "upload-progress"
})

/** user-defined constants **/



/** user-defined types **/

export type AppTheme = "system" | "light" | "dark"
export type AspectRatio = "wide" | "vertical" | "square" | "classic" | "tall"
export type Audio = { duration: number; sample_rate: number; channels: number }
export type AudioConfiguration = { mute: boolean; improve: boolean }
export type AudioInputLevelChange = number
export type AudioMeta = { path: string }
export type AuthStore = { token: string; user_id: string | null; expires: number; plan: Plan | null }
export type AuthenticationInvalid = null
export type BackgroundConfiguration = { source: BackgroundSource; blur: number; padding: number; rounding: number; inset: number; crop: Crop | null }
export type BackgroundSource = { type: "wallpaper"; id: number } | { type: "image"; path: string | null } | { type: "color"; value: [number, number, number] } | { type: "gradient"; from: [number, number, number]; to: [number, number, number]; angle?: number }
export type Bounds = { x: number; y: number; width: number; height: number }
export type Camera = { hide: boolean; mirror: boolean; position: CameraPosition; size: number; zoom_size: number | null; rounding: number; shadow: number }
export type CameraMeta = { path: string }
export type CameraPosition = { x: CameraXPosition; y: CameraYPosition }
export type CameraXPosition = "left" | "center" | "right"
export type CameraYPosition = "top" | "bottom"
export type CaptureScreen = { id: number; name: string }
export type CaptureWindow = { id: number; owner_name: string; name: string; bounds: Bounds }
export type Crop = { position: XY<number>; size: XY<number> }
export type CurrentRecordingChanged = null
export type CursorAnimationStyle = "regular" | "slow" | "fast"
export type CursorConfiguration = { hideWhenIdle: boolean; size: number; type: CursorType; animationStyle: CursorAnimationStyle }
export type CursorType = "pointer" | "circle"
export type Display = { path: string }
export type EditorStateChanged = { playhead_position: number }
export type Flags = { recordMouse: boolean; split: boolean; pauseResume: boolean; zoom: boolean; customS3: boolean }
export type GeneralSettingsStore = { uploadIndividualFiles?: boolean; openEditorAfterRecording?: boolean; hideDockIcon?: boolean; autoCreateShareableLink?: boolean; enableNotifications?: boolean; disableAutoOpenLinks?: boolean; hasCompletedStartup?: boolean; theme?: AppTheme }
export type Hotkey = { code: string; meta: boolean; ctrl: boolean; alt: boolean; shift: boolean }
export type HotkeyAction = "startRecording" | "stopRecording" | "restartRecording" | "takeScreenshot"
export type HotkeysConfiguration = { show: boolean }
export type HotkeysStore = { hotkeys: { [key in HotkeyAction]: Hotkey } }
export type JsonValue<T> = [T]
export type MultipleSegment = { display: Display; camera?: CameraMeta | null; audio?: AudioMeta | null; cursor?: string | null }
export type MultipleSegments = { segments: MultipleSegment[]; cursors: { [key in string]: string } }
export type NewNotification = { title: string; body: string; is_error: boolean }
export type NewRecordingAdded = { path: string }
export type NewScreenshotAdded = { path: string }
export type OSPermission = "screenRecording" | "camera" | "microphone" | "accessibility"
export type OSPermissionStatus = "notNeeded" | "empty" | "granted" | "denied"
export type OSPermissionsCheck = { screenRecording: OSPermissionStatus; microphone: OSPermissionStatus; camera: OSPermissionStatus; accessibility: OSPermissionStatus }
export type Plan = { upgraded: boolean; last_checked: number }
export type PreCreatedVideo = { id: string; link: string; config: S3UploadMeta }
export type ProjectConfiguration = { aspectRatio: AspectRatio | null; background: BackgroundConfiguration; camera: Camera; audio: AudioConfiguration; cursor: CursorConfiguration; hotkeys: HotkeysConfiguration; timeline?: TimelineConfiguration | null; motionBlur: number | null }
export type ProjectRecordings = { segments: SegmentRecordings[] }
export type RecordingInfo = { captureTarget: ScreenCaptureTarget }
export type RecordingMeta = ({ segment: SingleSegment } | { inner: MultipleSegments }) & { pretty_name: string; sharing?: SharingMeta | null }
export type RecordingMetaChanged = { id: string }
export type RecordingOptions = { captureTarget: ScreenCaptureTarget; cameraLabel: string | null; audioInputName: string | null }
export type RecordingOptionsChanged = null
export type RecordingStarted = null
export type RecordingStopped = { path: string }
export type RenderFrameEvent = { frame_number: number }
export type RenderProgress = { type: "Starting"; total_frames: number } | { type: "EstimatedTotalFrames"; total_frames: number } | { type: "FrameRendered"; current_frame: number }
export type RequestNewScreenshot = null
export type RequestOpenSettings = { page: string }
export type RequestRestartRecording = null
export type RequestStartRecording = null
export type RequestStopRecording = null
export type S3UploadMeta = { id: string; user_id: string; aws_region?: string; aws_bucket?: string }
export type ScreenCaptureTarget = ({ variant: "window" } & CaptureWindow) | ({ variant: "screen" } & CaptureScreen)
export type SegmentRecordings = { display: Video; camera: Video | null; audio: Audio | null }
export type SerializedEditorInstance = { framesSocketUrl: string; recordingDuration: number; savedProjectConfig: ProjectConfiguration; recordings: ProjectRecordings; path: string; prettyName: string }
export type SharingMeta = { id: string; link: string }
export type ShowCapWindow = "Setup" | "Main" | { Settings: { page: string | null } } | { Editor: { project_id: string } } | "PrevRecordings" | "WindowCaptureOccluder" | { Camera: { ws_port: number } } | { InProgressRecording: { position: [number, number] | null } } | "Upgrade"
export type SingleSegment = { display: Display; camera?: CameraMeta | null; audio?: AudioMeta | null; cursor?: string | null }
export type TimelineConfiguration = { segments: TimelineSegment[]; zoomSegments?: ZoomSegment[] }
export type TimelineSegment = { recordingSegment: number | null; timescale: number; start: number; end: number }
export type UploadMode = { Initial: { pre_created_video: PreCreatedVideo | null } } | "Reupload"
export type UploadProgress = { stage: string; progress: number; message: string }
export type UploadResult = { Success: string } | "NotAuthenticated" | "PlanCheckFailed" | "UpgradeRequired"
export type Video = { duration: number; width: number; height: number }
export type VideoType = "screen" | "output"
export type XY<T> = { x: T; y: T }
export type ZoomSegment = { start: number; end: number; amount: number }

/** tauri-specta globals **/

import {
	invoke as TAURI_INVOKE,
	Channel as TAURI_CHANNEL,
} from "@tauri-apps/api/core";
import * as TAURI_API_EVENT from "@tauri-apps/api/event";
import { type WebviewWindow as __WebviewWindow__ } from "@tauri-apps/api/webviewWindow";

type __EventObj__<T> = {
	listen: (
		cb: TAURI_API_EVENT.EventCallback<T>,
	) => ReturnType<typeof TAURI_API_EVENT.listen<T>>;
	once: (
		cb: TAURI_API_EVENT.EventCallback<T>,
	) => ReturnType<typeof TAURI_API_EVENT.once<T>>;
	emit: null extends T
		? (payload?: T) => ReturnType<typeof TAURI_API_EVENT.emit>
		: (payload: T) => ReturnType<typeof TAURI_API_EVENT.emit>;
};

export type Result<T, E> =
	| { status: "ok"; data: T }
	| { status: "error"; error: E };

function __makeEvents__<T extends Record<string, any>>(
	mappings: Record<keyof T, string>,
) {
	return new Proxy(
		{} as unknown as {
			[K in keyof T]: __EventObj__<T[K]> & {
				(handle: __WebviewWindow__): __EventObj__<T[K]>;
			};
		},
		{
			get: (_, event) => {
				const name = mappings[event as keyof T];

				return new Proxy((() => {}) as any, {
					apply: (_, __, [window]: [__WebviewWindow__]) => ({
						listen: (arg: any) => window.listen(name, arg),
						once: (arg: any) => window.once(name, arg),
						emit: (arg: any) => window.emit(name, arg),
					}),
					get: (_, command: keyof __EventObj__<any>) => {
						switch (command) {
							case "listen":
								return (arg: any) => TAURI_API_EVENT.listen(name, arg);
							case "once":
								return (arg: any) => TAURI_API_EVENT.once(name, arg);
							case "emit":
								return (arg: any) => TAURI_API_EVENT.emit(name, arg);
						}
					},
				});
			},
		},
	);
}
