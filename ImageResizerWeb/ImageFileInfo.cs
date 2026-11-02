using Microsoft.AspNetCore.Components.Forms;

public class ImageFileInfo
{
    public IBrowserFile? BrowserFile { get; set; }

    public string FileName { get; set; } = "";

    public long FileSize { get; set; }

    public string OriginalSize { get; set; } = "";

    public string ResizedSize { get; set; } = "";

    public string EstimatedSize { get; set; } = "";

    public int OriginalWidth { get; set; }

    public int OriginalHeight { get; set; }
}