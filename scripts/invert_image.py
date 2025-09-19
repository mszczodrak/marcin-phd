from PIL import Image, ImageOps
import os


def invert_image_color(input_path, output_path):
    """
    Inverts the color of an image while preserving its transparency.

    Args:
        input_path (str): The path to the input image.
        output_path (str): The path where the inverted image will be saved.
    """
    try:
        # Open the image using a 'with' statement to ensure it's closed properly
        with Image.open(input_path) as img:
            # Ensure the image is in RGBA mode to handle transparency
            if img.mode != 'RGBA':
                img = img.convert('RGBA')

            # Separate the RGB channels from the Alpha channel
            rgb_channels = img.convert('RGB')
            alpha_channel = img.getchannel('A')

            # Invert the color of the RGB channels
            inverted_rgb_channels = ImageOps.invert(rgb_channels)

            # Re-combine the inverted RGB channels with the original alpha channel
            inverted_img = Image.merge(
                'RGBA', (*inverted_rgb_channels.split(), alpha_channel))

            # Save the resulting image in WEBP format, preserving quality and transparency
            inverted_img.save(output_path, 'WEBP', quality=100, lossless=True)
            print(f"Successfully inverted image and saved to '{output_path}'")

    except FileNotFoundError:
        print(f"Error: The file '{input_path}' was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    input_file = os.path.join(
        project_root, 'public/images/file_audio_icon.webp')
    output_file = os.path.join(
        project_root, 'public/images/file_audio_icon_white.webp')
    invert_image_color(input_file, output_file)
