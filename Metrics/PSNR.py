import cv2
import numpy as np
from skimage.metrics import structural_similarity as ssim

def PSNR(img1, img2):
    # Convert images to float32
    img1 = np.float32(img1)
    img2 = np.float32(img2)

    # Calculate mean squared error (MSE)
    mse = np.mean((img1 - img2) ** 2)

    # Calculate maximum pixel value
    max_pixel = np.max(img1)

    # Calculate PSNR
    psnr = 20 * np.log10(max_pixel / np.sqrt(mse))
    

    return psnr

# Load images
img1 = cv2.imread('imgs/og_1.png')
img2 = cv2.imread('imgs/new_1.png')
# img2 = cv2.imread('imgs/old_1.png')

# Calculate PSNR, LIPIS, and SSIM
psnr = PSNR(img1, img2)
print(psnr)

