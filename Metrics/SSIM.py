import cv2
import numpy as np
from skimage.metrics import structural_similarity as ssim

def SSIM(img1, img2, window_size=11, sigma=1.5, K1=0.01, K2=0.03):
    # Convert images to float32
    img1 = np.float32(img1)
    img2 = np.float32(img2)

    # Compute SSIM index
    ssim_index = ssim(img1, img2, win_size=window_size, sigma=sigma, data_range=img1.max() - img1.min(), multichannel=True, K1=K1, K2=K2)

    return ssim_index

# Load images
img1 = cv2.imread('imgs/og_1.png')
img2 = cv2.imread('imgs/new_1.png')
# img2 = cv2.imread('old.png')

# Calculate SSIM
ssim = SSIM(img1, img2)

# Print results
print('SSIM:', ssim)